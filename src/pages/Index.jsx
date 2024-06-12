import React from "react";
import { Container, Box, Heading, Text, VStack, HStack, IconButton, Avatar, Link, SimpleGrid, GridItem } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      {/* Header */}
      <Box textAlign="center" mb={10}>
        <Avatar size="2xl" name="John Doe" src="https://images.unsplash.com/photo-1713238392341-92fb2cdc12de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTgxOTAyMzB8MA&ixlib=rb-4.0.3&q=80&w=1080" mb={4} />
        <Heading as="h1" size="2xl" mb={2}>
          John Doe
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Full Stack Developer
        </Text>
        <HStack justify="center" spacing={4} mt={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="mailto:johndoe@example.com" isExternal>
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
          </Link>
        </HStack>
      </Box>

      {/* About Section */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="md" color="gray.700">
          Hello! I'm John Doe, a passionate Full Stack Developer with over 5 years of experience in building web applications. I love working with modern technologies and creating user-friendly interfaces.
        </Text>
      </Box>

      {/* Skills Section */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4}>
          Skills
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          <GridItem>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={2}>
                Frontend
              </Heading>
              <Text>React, Angular, Vue</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={2}>
                Backend
              </Heading>
              <Text>Node.js, Django, Ruby on Rails</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={2}>
                Database
              </Heading>
              <Text>MySQL, PostgreSQL, MongoDB</Text>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4}>
          Contact
        </Heading>
        <Text fontSize="md" color="gray.700">
          Feel free to reach out to me via email at{" "}
          <Link href="mailto:johndoe@example.com" color="teal.500">
            johndoe@example.com
          </Link>{" "}
          or connect with me on LinkedIn.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
