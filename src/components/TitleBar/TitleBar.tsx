import { Avatar, Box, Button, Divider, Sheet, Typography } from "@mui/joy";
import Image from "next/image";
// import { MdMinimize, MdOutlineClose } from "react-icons/md";
// import { VscChromeMaximize } from "react-icons/vsc";

type TitleBarProps = {
  title?: string;
};

export default function TitleBar({ title = "Untitled" }: TitleBarProps) {
  //   const actionBtns = [
  //     {
  //       icon: <MdMinimize />,
  //       onClick: () => {
  //         console.log("minimize");
  //       },
  //     },
  //     {
  //       icon: <VscChromeMaximize />,
  //       onClick: () => {
  //         console.log("maximize");
  //       },
  //     },
  //     {
  //       icon: <MdOutlineClose />,
  //       onClick: () => {
  //         console.log("close");
  //       },
  //     },
  //   ];

  return (
    <Sheet
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "3rem",
      }}
    >
      <Typography padding={1} display="flex" alignItems="center">
        <Image
          style={{ marginRight: ".5rem" }}
          src="/assets/images/logo.png"
          alt={""}
          width={24}
          height={24}
        />
        <Box
          sx={{ marginRight: "1.5rem" }}
          component="span"
          className="notepad-logo-font"
          fontSize="1.25rem"
        >
          Notepad
        </Box>
      </Typography>

      <Typography
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          outline: "none",
          ":focus-visible": {
            outline:
              "solid 1px rgba(var(--joy-palette-neutral-mainChannel) / .75)",
          },
        }}
        contentEditable
        onInput={e => console.log(e.currentTarget.textContent)}
      >
        {title}
      </Typography>

      <Box sx={{ marginY: 0.5, marginX: 1 }}>
        {/* <Avatar
            sx={{ borderRadius: 8 }}
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            MR
          </Avatar> */}
        {/* <Button
          color="neutral"
          variant="soft"
          sx={{
            ":hover": {
              bgcolor: "rgba(var(--joy-palette-neutral-mainChannel) / 0.28)",
            },
          }}
          size="sm"
        >
          Login
        </Button> */}
      </Box>

      {/* <Box>
          {actionBtns.map((btn, i) => (
            <Button
              key={i}
              color="neutral"
              variant="soft"
              sx={{
                borderRadius: 0,
                ":hover": {
                  bgcolor:
                    i == actionBtns.length - 1
                      ? "red"
                      : "rgba(var(--joy-palette-neutral-mainChannel) / 0.28)",
                },
              }}
              onClick={btn.onClick}
            >
              {btn.icon}
            </Button>
          ))}
        </Box> */}
    </Sheet>
  );
}
