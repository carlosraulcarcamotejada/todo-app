import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";


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
  const { status } = useAuthStore();

  return (
    <div
      className={`mt-6 flex justify-center ${
        displayedMessagesLinks.length > 1 ? "flex-col items-center" : ""
      }`}
    >
      {displayedMessagesLinks.map(({ displayedMessage, path }) => (
        <Link
          key={displayedMessage}
          className={`font-semibold mb-2
          active:decoration-double
          ${
            status === "checking"
              ? "pointer-events-none text-gray-500/50"
              : "text-blue-500"
          }`}
          to={path}
        >
            <span >{displayedMessage}</span>
        </Link>
      ))}
    </div>
  );
};

