const START_URL = 'http://localhost:8000/api/v1/courses/fc01f5ba-c59f-49a2-b75b-4cd9f0d86b02';


export function fetchCourse(url = START_URL) {
  return function dispatcher(dispatch) {
    dispatch({
      type: 'FETCH_COURSE_REQUEST',
    });
    return fetch(url)
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: 'FETCH_COURSE_FAILURE',
            error: body.error,
          });
        } else {
          dispatch({
            type: 'FETCH_COURSE_SUCCESS',
            result: body,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_COURSE_FAILURE',
          error,
        });
      });
  };
}
