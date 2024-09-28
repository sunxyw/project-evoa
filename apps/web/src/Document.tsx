import {
  Body,
  Comment,
  DocumentContext,
  Head,
  Html,
  Root,
} from "@modern-js/runtime/document";
import type React from "react";
import { useContext } from "react";

export default function Document(): React.ReactElement {
  const {
    config: { output: htmlConfig },
    templateParams,
  } = useContext(DocumentContext);

  return (
    <Html>
      <Head>
        <title>{htmlConfig.title}</title>
        <link href="https://modernjs.dev" />
        <Comment>{"<!-- Need a Comment -->"}</Comment>
      </Head>
      <Body>
        <Root rootId={templateParams.mountId} />
      </Body>
    </Html>
  );
}
