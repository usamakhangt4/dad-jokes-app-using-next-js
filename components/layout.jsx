import Nav from './nav';

export default function layout(props) {
  return (
    <React.Fragment>
      <Nav />
      {props.children}
    </React.Fragment>
  );
}
