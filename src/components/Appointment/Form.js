import React, { useState } from "react";
import "components/Appointment/styles.scss";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset = function () {
    setStudent("");
    setInterviewer(null);
    setError("");
  };

  const cancel = function () {
    reset();
    props.onCancel();
  };

  const validate = function (student, interviewer, requestType) {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }

    setError("");
    props.onSave(student, interviewer, requestType);
  };

  let requestType;
  props.student
    ? (requestType = "updateInterview")
    : (requestType = "addInterview");

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="student"
            type="text"
            placeholder={student ? student : "Enter Student Name"}
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => cancel()}>
            Cancel
          </Button>
          <Button
            confirm
            onClick={() => validate(student, interviewer, requestType)}
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
