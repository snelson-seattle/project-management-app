import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";


const Clients = () => {
  const { data, error, loading } = useQuery(GET_CLIENTS);

  let content;
  if (loading) {
    content = <Spinner />;
  }

  if (error) {
    content = <p>Oops! Something went wrong.</p>;
  }

  if (data) {
    content = (
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map((client) => (
            <ClientRow key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    );
  }

  return content;
};

export default Clients;
