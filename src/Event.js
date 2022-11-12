import { Grid, Image, Stack, Text, Title } from "@mantine/core";
import React, { useState } from "react";

function Event({ event, hasMedia, hasText, hasEndDate }) {
  const [imageError, setImageError] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  const formatDate = (date) => {
    const year = date.year ? date.year : null;
    const month = date.month
        ? months[date.month - 1]
      : null;
    const day = date.day ? (date.day < 10 ? `0${date.day}` : date.day) : null;
    const time = date.time ? formatAMPM(new Date("1970-01-01T" + date.time)) : "";
    return `${time} ${month} ${day},${year}`;
  };

  return (
    <Grid grow gutter="xs" p={10}>
      <Grid.Col sm={6}>
        <div
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            minHeight: "60px ",
          }}
        >
          {hasMedia && event.media.url.includes("youtube") ? (
            <>
              <iframe
                width="100%"
                height={300}
                src={
                  "https://www.youtube.com/embed/" +
                  event.media.url.split("watch?v=")[1]
                }
                title={event.media.caption}
              />
              <Stack
                spacing="xs"
                align="center"
                style={{ transform: "translateY(-15%)" }}
              >
                <Text color="dimmed" size="xs">
                  {hasMedia && event.media.credit ? event.media.credit : ""}
                </Text>
                <Text size="md">
                  {hasMedia && event.media.caption ? event.media.caption : ""}
                </Text>
              </Stack>
            </>
          ) : (
            <Image
              radius="md"
              src={event.media.url}
              height={imageError ? 300 : null}
              alt={event.media.caption}
              onError={(e) => {
                setImageError(true);
              }}
              caption={
                <Stack spacing="xs" style={{ transform: "translateY(-15%)" }}>
                  <Text color="dimmed" size="xs">
                    {hasMedia && event.media.credit ? event.media.credit : ""}
                  </Text>
                  <Text size="md">
                    {hasMedia && event.media.caption ? event.media.caption : ""}
                  </Text>
                </Stack>
              }
              withPlaceholder
            />
          )}
        </div>
      </Grid.Col>
      <Grid.Col sm={6}>
        <Stack
          align="flex-start"
          justify="center"
          sx={(theme) => ({
            paddingLeft: theme.spacing.lg,
            paddingRight: theme.spacing.lg,
            height: "100%",
          })}
        >
          <Title order={5} weight={400}>
            {"type" in event && event.type === "title"
              ? ""
              : `${formatDate(event.start_date)} ${
                  hasEndDate ? " - " + formatDate(event.end_date) : ""
                } `}
          </Title>
          <Title order={1}>{event.text.headline}</Title>
          <Text>{event.text.text}</Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default Event;
