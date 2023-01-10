import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { useMemo } from "react";
import { ImageBasicProps, PictureProps } from "./picture.types";

export const Picure = ({
  src,
  alt,
  height,
  width,
  objectFit,
  base,
  sm,
  md,
  lg,
  style,
  centererd,
  ...props
}: PictureProps) => {
  const hasAsyncSrc = useMemo(
    () => !!src || [base, sm, md, lg].some((prop) => !!prop),
    [base, sm, md, lg, src]
  );

  const baseSrc = (base?.src || src) as string;
  const baseHeight = base?.height || height;
  const baseWidth = base?.width || width;

  const sizeImageProps = useMemo(() => {
    if (!baseHeight || !baseHeight) return { fill: true };
  }, [baseHeight, baseWidth]);

  if(!hasAsyncSrc) return null;

  return (
    <Box
      as="picture"
      style={{
        objectFit,
        maxWidth: "100%",
        display: "inline-block",
        ...style,
      }}
      {...props}
    >
      {lg && }
    </Box>
  )
}
