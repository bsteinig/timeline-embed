import {  Grid, Image, Stack, Text, Title } from "@mantine/core";
import React from "react";

function Event({event}) {

  return (
    <Grid grow gutter="xs" p={10}>
      <Grid.Col sm={6}>
        <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <Image
            radius="md"
            src={event.media.url}
            alt="Random unsplash image"
            caption={<Stack spacing="xs" style={{ transform: "translateY(-25%)" }}><Text color="dimmed" size="xs">Image Credit</Text><Text>Image Caption: Dog playing in the water</Text> </Stack>}
            withPlaceholder
          />
        </div>
      </Grid.Col>
      <Grid.Col sm={6}>

          <Stack align="flex-start" justify="center" sx={(theme) => ({ paddingLeft: theme.spacing.lg, height: "100%" })}>
            <Title order={4} weight={400}>
              Start Date - End Date
            </Title>
            <Title order={1}>{event.text.headline}</Title>
            <Text>{event.text.text}</Text>
          </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default Event;
