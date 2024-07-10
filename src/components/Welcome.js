import React, { useContext } from "react";
import { MutatingDots } from "react-loader-spinner";
import { ThemeContext } from "../theme";

function Welcome() {
  const theme = useContext(ThemeContext).systemTheme;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: theme.backgroundColor,
        }}
      >
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="yellow"
          secondaryColor="blue"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}

export default Welcome;
