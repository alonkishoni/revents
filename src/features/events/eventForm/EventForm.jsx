import cuid from "cuid";
import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { updateEvent, createEvent, listenToEvents } from "../eventActions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import MyDateInput from "../../../app/common/form/MyDateInput";

import { categoryData } from "../../../app/api/categoryOptions";
import useFirestoreDoc from "../../../app/hooks/useFirestoreDoc";
import { listenToEventsFromFirestore } from "../../../app/firestore/firestoreService";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Redirect } from "react-router";

function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const { loading, error } = useSelector((state) => state.async);

  const initialvalues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("You must provide a title"),
    category: Yup.string().required("You must provide a category"),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  useFirestoreDoc({
    query: () => listenToEventsFromFirestore(match.params.id),
    data: (event) => dispatch(listenToEvents([event])),
    deps: [match.params.id, dispatch],
  });

  if (loading || (!selectedEvent && !error))
    return <LoadingComponent content="Loading Event..." />;

  if (!selectedEvent) {
    return <Redirect to="/error"></Redirect>;
  }

  return (
    <Segment clearing>
      <Header
        content={selectedEvent ? "Edit Event" : "Create New Event"}
      ></Header>
      <Formik
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
          history.push("/events");
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <Header sub color="teal" content="Event Details" />
            <MyTextInput name="title" placeholder="title" />
            <MySelectInput
              name="category"
              placeholder="Event Category"
              options={categoryData}
            />
            <MyTextArea name="description" rows="3" placeholder="Description" />
            <Header sub color="teal" content="Event Location Details" />
            <MyTextInput name="city" placeholder="City" />
            <MyTextInput name="venue" placeholder="Venue" />
            <MyDateInput
              name="date"
              placeholderText="Date"
              timeFormat="HH:mm"
              timeCaption="time"
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm a"
            />

            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              floated="right"
              positive
              content="Submit"
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              floated="right"
              content="Cancel"
              as={Link}
              to="/events"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}

export default EventForm;
