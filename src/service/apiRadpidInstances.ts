import axios from "axios";

export const runCode = async ({
  props
}: {
  props:any
}) => {
  const options: object = {
    method: "POST",
    url: "https://code-runner.p.rapidapi.com/run_code",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "834bccc5b6msh1ca71083efd0654p1c056djsn09a04f4209e5",
      "X-RapidAPI-Host": "code-runner.p.rapidapi.com",
    },
    data: {
      code: props.code,
      language: props.lang,
    },
  };

  console.log(props);

  // try {
  //   const response = await axios.request(options);
  //   return response;
  // } catch (error) {
  //   console.error(error);
  // }
};
