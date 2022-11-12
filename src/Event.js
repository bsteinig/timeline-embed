import {  Grid, Image, Stack, Text, Title } from "@mantine/core";
import React from "react";

function Event() {




  return (
    <Grid grow gutter="xs" p={10}>
      <Grid.Col sm={6}>
        <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <Image
            radius="md"
            src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
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
            <Title order={1}>Event Title</Title>
            <Text>Event Description</Text>
          </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default Event;
