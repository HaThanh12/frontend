import { Box, Typography } from "@mui/material";
import { formatsSectionData2 } from "../datas/formatDatas";
import { PrimaryButton } from "../components/PrimaryButton";
import Vector from "../components/Vector";

export default function Caption2() {
  return (
    <>
      <Vector isInvert={true} />
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          maxWidth: 1520,
          ml: { xs: 0, md: 0 },
        }}
      >
        {/* Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" }, // mobile: ảnh trên, desktop: ảnh bên phải
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 3, md: 6 },
            py: { xs: 6, md: 10 },
            px: { xs: 2, md: 6 },
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* Image box */}
          <Box
            sx={{
              order: { xs: 0, md: 1 }, // mobile: ảnh ở trên
              flex: 1,
              display: "flex",
              justifyContent: "center",
              maxWidth: { md: 530 },
              width: "100%",
            }}
          >
            <img
              src={formatsSectionData2.img}
              alt="caption"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 8,
                objectFit: "cover",
                maxHeight: 430,
              }}
            />
          </Box>

          {/* Text box */}
          <Box
            sx={{
              order: { xs: 1, md: 0 }, // mobile: text ở dưới
              flex: 1,
              maxWidth: { md: 600 },
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              fontSize={{ xs: 26, sm: 30, md: 35 }}
              sx={{ mb: 2 }}
            >
              <Box component="span" color="#1a73e8">
                {formatsSectionData2.title}{" "}
              </Box>
              {formatsSectionData2.highlighted}
            </Typography>

            {formatsSectionData2.descriptions.map((desc, idx) => (
              <Typography
                key={idx}
                variant="body1"
                sx={{
                  mb: 2,
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  lineHeight: 1.6,
                }}
                component="div"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            ))}

            {/* Button co giãn */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <PrimaryButton
                text={formatsSectionData2.buttonText}
                onClick={() => console.log("Button clicked")}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
