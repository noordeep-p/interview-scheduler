import React from "react";
import "components/Appointment/styles.scss";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

export default function Appointment(props) {
  const formatTime = (props) => {
    if (props.time) {
      return `${props.time}`;
    }
    return `No Appointments`;
  };

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const saveInterview = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => {
      transition(SHOW);
    });
  };

  const deleteInterview = () => {
    transition(DELETING);
    props.deleteInterview(props.id).then(() => {
      transition(EMPTY);
    });
  };

  const cancel = () => {
    back();
  };

  return (
    <article className="appointment">
      {formatTime(props)}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && (
        <Confirm
          onCancel={cancel}
          onConfirm={deleteInterview}
          message="Are you sure you would like to delete?"
        />
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          deleteInterview={() => transition(CONFIRM)}
          editInterview={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          student={null}
          onCancel={() => cancel()}
          onSave={saveInterview}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id}
          student={props.interview.student}
          onCancel={() => cancel()}
          onSave={saveInterview}
        />
      )}
    </article>
  );
}
