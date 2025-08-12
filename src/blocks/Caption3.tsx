import { Box, Typography } from "@mui/material";
import { formatsSectionData3 } from "../datas/formatDatas";
import { PrimaryButton } from "../components/PrimaryButton";

export default function Caption3() {
  return (
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
          flexDirection: { xs: "column", md: "row" }, // mobile: cột, desktop: hàng
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
        {/* Image - nằm trên khi mobile */}
        <Box
          sx={{
            order: { xs: 0, md: 1 }, // mobile: ảnh ở trên
            flex: 1,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: { xs: "100%", md: 520 },
          }}
        >
          <img
            src={formatsSectionData3.img}
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
            order: { xs: 1, md: 0 }, // mobile: text ở dưới ảnh
            flex: 1,
            width: "100%",
            pl: { xs: 0, md: 6 },
            maxWidth: { xs: "100%", md: "600px" },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            fontSize={{ xs: 24, sm: 28, md: 35 }}
            sx={{ mb: 2 }}
          >
            <Box component="span">{formatsSectionData3.title} </Box>
            <Box component="span" sx={{ color: "#1a73e8", mr: 1 }}>
              {formatsSectionData3.highlighted}
            </Box>
          </Typography>

          {formatsSectionData3.descriptions.map((desc, idx) => (
            <Typography
              key={idx}
              variant="body1"
              component="div"
              sx={{
                mb: 2,
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: 1.6,
                ml:
                  desc.trim().startsWith("Each") ||
                  desc.trim().startsWith("Our")
                    ? 4
                    : 0,
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
              text={formatsSectionData3.buttonText}
              onClick={() => console.log("Button clicked")}
            //   sx={{
            //     width: "100%", // mobile: full width
            //     maxWidth: 280, // giới hạn tối đa
            //   }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
