export function getAppointmentsForDay(state, day) {
  const filterDays = state.days.filter((days) => days.name === day);
  const foundDay = filterDays[0];
  if (!foundDay) {
    return [];
  }
  const foundAppointments = foundDay.appointments.map((appId) => {
    return state.appointments[appId];
  });

  return foundAppointments;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviews = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };

  return interviews;
}
