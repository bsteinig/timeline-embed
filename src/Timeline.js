import { Carousel, Embla } from "@mantine/carousel";
import { Button, Container } from "@mantine/core";
import {
  IconPlayerSkipBack,
  IconPlayerSkipForward,
  IconZoomIn,
  IconZoomOut,
} from "@tabler/icons";
import React, { useState } from "react";
import Event from "./Event";
import { mockdata } from "./sample";

function TimelineComponent() {
  const [embla, setEmbla] = useState(null);

  const events = mockdata["events"].map((event) => (
    <Carousel.Slide>
      <Event
        event={event}
        hasMedia={"media" in event}
        hasText={"text" in event}
        hasEndDate={"end_date" in event}
      />
    </Carousel.Slide>
  ));

  const handleEmbla = (last) => {
    if (!embla) return;
    if (last) {
      embla.scrollTo(embla.scrollSnapList().length - 1);
    } else {
      embla.scrollTo(0);
    }
  };

  return (
    <Container size="xl">
      <Carousel
        mx="auto"
        styles={{
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
        getEmblaApi={setEmbla}
        slideGap="md"
        controlSize={30}
      >
        {events}
      </Carousel>
      <Container size="fluid" bg="blue" style={{ position: "relative" }}>
        Controls Pane
        <Button.Group
          orientation="vertical"
          buttonBorderWidth={0}
          style={{
            width: "45px",
            position: "sticky",
            top: "0",
            left: "0",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <Button
            variant="default"
            size="sm"
            pl={0}
            pr={0}
            radius="xl"
            onClick={() => handleEmbla(false)}
          >
            <IconPlayerSkipBack />
          </Button>
          <Button
            variant="default"
            size="sm"
            pl={0}
            pr={0}
            onClick={() => handleEmbla(true)}
          >
            <IconPlayerSkipForward />
          </Button>
          <Button variant="default" size="sm" pl={0} pr={0}>
            <IconZoomIn />
          </Button>
          <Button variant="default" size="sm" pl={0} pr={0} radius="xl">
            <IconZoomOut />
          </Button>
        </Button.Group>
      </Container>
    </Container>
  );
}

export default TimelineComponent;
