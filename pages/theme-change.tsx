import React, { ChangeEvent, FC, useState } from "react";
import { GetServerSideProps } from "next";

import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Layout } from "../components/layouts";

interface Props {
  theme: string;
}

const ThemeChangePage: FC<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(e.target.value);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel
                value={"light"}
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel
                value={"dark"}
                control={<Radio />}
                label="Dark"
              />
              <FormControlLabel
                value={"custom"}
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "light", name = "no name" } = req.cookies;

  const validTheme = ["light", "dark", "custom"];
  return {
    props: {
      theme: validTheme.includes(theme) ? theme : "dark",
      name,
    },
  };
};

export default ThemeChangePage;
