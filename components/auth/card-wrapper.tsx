"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Header from "./Header";
import BackButton from "./back-button";
import Social from "./social";

interface cardwrapperprops {
  children: React.ReactNode;
  headerlabel: string;
  backbuttonlabel: string;
  backbuttonhref: string;
  showsocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerlabel,
  backbuttonhref,
  backbuttonlabel,
  showsocial,
}: cardwrapperprops) => {
  return (
    <Card className="w-[35%]">
      <CardContent>
        <Header label={headerlabel} />
      </CardContent>
      <CardContent>{children}</CardContent>
      {showsocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backbuttonlabel} href={backbuttonhref} />
      </CardFooter>
    </Card>
  );
};
