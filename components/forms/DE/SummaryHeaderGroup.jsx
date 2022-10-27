import Form10 from './Form10';
import Form31 from './Form31';

const SummaryHeaderGroup = ({handleDrawbackProvisionChange}) => {
  

  return (
    <>
      <Form10 handleDrawbackProvisionChange={handleDrawbackProvisionChange} />
      <Form31 />
    </>
  );
};

export default SummaryHeaderGroup;
