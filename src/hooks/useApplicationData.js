import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    interviewers: {},
    appointments: {},
  });

  //const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:8001/api/days`),
      axios.get(`http://localhost:8001/api/appointments`),
      axios.get(`http://localhost:8001/api/interviewers`),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const updateSpots = (requestType) => {
    const dayIndex = state.days.findIndex((day) => day.name === state.day);
    const days = state.days;
    if (requestType === "addInterview") {
      days[dayIndex].spots -= 1;
    }
    if (requestType === "deleteInterview") {
      days[dayIndex].spots += 1;
    }
    return days;
  };

  const updateLocalInterview = (id, interview, requestType) => {
    const days = updateSpots(requestType);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    setState({
      ...state,
      appointments,
      days,
    });
  };

  const bookInterview = (id, interview, requestType) => {
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then((res) => {
        if (res.status === 204) {
          updateLocalInterview(id, interview, requestType);
        }
      });
  };

  const deleteLocalInterview = (id) => {
    const days = updateSpots("deleteInterview");
    setState({
      ...state,
      appointments: {
        ...state.appointments,
        [id]: { ...state.appointments[id], interview: null },
      },
      days,
    });
  };

  const deleteInterview = (id) => {
    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then((res) => {
        if (res.status === 204) deleteLocalInterview(id);
      });
  };

  return { deleteInterview, bookInterview, state, setDay };
}
