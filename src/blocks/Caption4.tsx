import { Box, Typography } from "@mui/material";
import { formatsSectionData1 } from "../datas/formatDatas";
import { PrimaryButton } from "../components/PrimaryButton";
import Vector from "../components/Vector";

export default function Caption4() {
  return (
    <>
      <Vector />
      <Box
        sx={{
          backgroundColor: "#EFF1F4",
          width: "100%",
          maxWidth: 1520,
          ml: { xs: 0, md: 0 },
        }}
      >
        {/* Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // mobile: ảnh trên, desktop: ảnh bên phải
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 3, md: 6 },
            py: { xs: 6, md: 10 },
            px: { xs: 2, md: 6 },
            maxWidth: 1120,
            margin: "0 auto",
            backgroundColor: "#EFF1F4",
          }}
        >
          {/* Image */}
          <Box
            sx={{
              order: { xs: 0, md: 1 }, // mobile: ảnh trước
              flex: 1,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              maxWidth: { xs: "100%", md: 470 },
            }}
          >
            <img
              src={formatsSectionData1.img}
              alt="caption"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: 430,
                borderRadius: 8,
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Text */}
          <Box
            sx={{
              order: { xs: 1, md: 0 },
              flex: 1,
              width: "100%",
              pl: { xs: 0, md: 6 },
              maxWidth: { xs: "100%", md: 600 },
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              fontSize={{ xs: 24, sm: 28, md: 35 }}
              sx={{ mb: 2 }}
            >
              <Box component="span" sx={{ color: "#1a73e8", mr: 1 }}>
                {formatsSectionData1.highlighted}
              </Box>
              <Box component="span">{formatsSectionData1.title} </Box>
            </Typography>

            {formatsSectionData1.descriptions.map((desc, idx) => (
              <Typography
                key={idx}
                variant="body1"
                component="div"
                sx={{
                  mb: 2,
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  lineHeight: 1.6,
                }}
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
                text={formatsSectionData1.buttonText}
                onClick={() => console.log("Button clicked")}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
