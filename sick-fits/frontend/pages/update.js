import UpdateItem from '../components/UpdateItem';

const Sell = ({query}) => ( // cool trick = destructure props in a stateless component
  <div>
    <UpdateItem id={query.id}/>
  </div>
);

export default Sell; // withRouter
