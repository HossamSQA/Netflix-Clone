import { ThemeProvider } from "react-bootstrap";
import { HomePage } from "./components";

const App = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div>
        <HomePage />
      </div>
    </ThemeProvider>
  );
};

export default App;
