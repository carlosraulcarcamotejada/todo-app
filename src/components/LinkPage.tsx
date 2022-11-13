import { FC } from "react";
import { Link } from "react-router-dom";

type messageLink = {
  displayedMessage: string;
  path: string;
};

type props = {
  displayedMessagesLinks: messageLink[];
};

export const LinkPage: FC<props> = ({
  displayedMessagesLinks,
}): JSX.Element => {
  return (
    <div
      className={`mt-4 flex justify-center ${
        displayedMessagesLinks.length > 1 ? "flex-col items-center" : ""
      }`}
    >
      {displayedMessagesLinks.map(({ displayedMessage, path }) => (
        <Link
          key={displayedMessage}
          className="font-semibold text-blue-500 mt-2"
          to={path}
        >
          {displayedMessage}
        </Link>
      ))}
    </div>
  );
};
