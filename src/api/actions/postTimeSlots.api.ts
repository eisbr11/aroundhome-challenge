import axios, { AxiosPromise } from 'axios';
import { PostTimeSlots } from 'types/companies.type';

const postTimeSlots = (postData: PostTimeSlots):AxiosPromise => axios.post(
  'https://postman-echo.com/post',
  postData,
);

export default postTimeSlots;
