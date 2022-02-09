import "../main/main.scss"

export const Main = (props) => {
  const {
    children
  } = props;

    return <main className="main">{children}</main>;
  };
  