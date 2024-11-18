// React에서 Data-Fetching 과정!!!
import { useEffect } from "react";

const Page = () => {
  // const [state, setState] = useState("");
  const fetchData = async () => {
    // const response = fetch("...");
    // const data = await response.json();

    // setState(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // return <div>{state}</div>;
};

export default Page;
