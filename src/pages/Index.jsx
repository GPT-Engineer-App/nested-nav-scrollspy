import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Link, Stack, useColorModeValue, Container, VStack } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const sections = [
  { id: "section1", label: "Section 1", subSections: [] },
  {
    id: "section2",
    label: "Section 2",
    subSections: [
      { id: "subSection2_1", label: "SubSection 2.1" },
      { id: "subSection2_2", label: "SubSection 2.2" },
    ],
  },
  { id: "section3", label: "Section 3", subSections: [] },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("");

  // Dummy scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      // You would need to replace this logic with actual scrollspy behavior
      const currentSection = sections[Math.floor(Math.random() * sections.length)].id;
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box>
      <Flex as="nav" bg={bg} p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1">My Website</Heading>
        <FaBars />
      </Flex>
      <Flex>
        <Box as="aside" width="20%" pt={10} bg={bg}>
          <Stack as="nav">
            {sections.map((section) => (
              <VStack key={section.id} align="start">
                <Link px={2} py={1} fontWeight={activeSection === section.id ? "bold" : "normal"} onClick={() => setActiveSection(section.id)}>
                  {section.label}
                </Link>
                {section.subSections.length > 0 &&
                  section.subSections.map((subSection) => (
                    <Link key={subSection.id} px={4} py={1} fontWeight={activeSection === subSection.id ? "bold" : "normal"} onClick={() => setActiveSection(subSection.id)}>
                      {subSection.label}
                    </Link>
                  ))}
              </VStack>
            ))}
          </Stack>
        </Box>
        <Container as="main" maxW="80%" pt={10}>
          {sections.map((section) => (
            <Box key={section.id} id={section.id} py={10}>
              <Heading as="h2">{section.label}</Heading>
              <Box>
                {/* Content of each section goes here */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Box>
              {section.subSections.map((subSection) => (
                <Box key={subSection.id} id={subSection.id} py={10}>
                  <Heading as="h3" size="md">
                    {subSection.label}
                  </Heading>
                  <Box>
                    {/* Content of each sub-section goes here */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Container>
      </Flex>
    </Box>
  );
};

export default Index;
