import Card from "../../Card/Card";
import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress size={205} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: 90,
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{
            color: "#516072",
            fontSize: 20,
          }}
        >
          <div className="flex flex-col justify-center gap-[-100px]">
            <div className="max-w-[56px] relative top-[-15px] left-[28px] px-[9px] py-[3px] bg-orange-50 rounded-[31px] text-amber-500 text-lg font-semibold font-velaSans">{`${Math.round(
              props.value
            )}%`}</div>
          </div>
          <p className="text-center text-slate-600 text-sm font-medium font-velaSans max-w-[200px] relative top-[-10px]">
            Last chance <br /> to get your SHIB
          </p>
        </Typography>
      </Box>
    </Box>
  );
}

const DonutCard = () => {
  const [progress, setProgress] = React.useState(75);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress > 100 || prevProgress == 0) {
          return 0;
        } else return prevProgress - 1;
      });
    }, 6000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Card className="">
        <div className="flex justify-center pt-[30px] pb-[70px] px-[80px]">
          <CircularProgressWithLabel
            className=" z-10 "
            sx={{
              color: "orange",
            }}
            value={progress}
          />
          <CircularProgress
            size={205}
            variant="determinate"
            sx={{ color: "#FFF6E7" }}
            value={100}
            className="absolute"
          />
        </div>
      </Card>
    </>
  );
};

export default DonutCard;
