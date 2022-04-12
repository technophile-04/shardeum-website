import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function Team() {
  return (
    <Flex as="section" bg="brand.grey-10">
      <Container maxW="container.xl" mx="auto" py="28">
        <VStack alignItems="start" spacing="12">
          <Heading color="brand.black">Team Shardeum</Heading>
          <SimpleGrid columns={[1, 1, 2]} gap="6" alignItems="start">
            <SimpleGrid columns={[1, 1, 2]} gap="6">
              <VStack spacing="6">
                <Image
                  objectFit="cover"
                  src="/Nischal.png"
                  alt="Nischal Image"
                  width="270px"
                  height="300px"
                />
                <VStack alignItems="start">
                  <Text fontSize="xl" color="brand.black" fontWeight="medium">
                    Nischal Shetty
                  </Text>
                  <Text color="brand.grey-70">
                    Founder of WazirX, Crowdfire and a steward of the
                    cryptocurrency industry in India
                  </Text>
                </VStack>
              </VStack>
              <VStack spacing="6">
                <Image
                  objectFit="cover"
                  src="/Omar.png"
                  alt="Omar Image"
                  width="270px"
                  height="300px"
                />
                <VStack alignItems="start">
                  <Text fontSize="xl" color="brand.black" fontWeight="medium">
                    Omar
                  </Text>
                  <Text color="brand.grey-70">
                    A blockchain architect and a scientist cum inventor with
                    prior experience working at NASA, Yahoo and Zynga
                  </Text>
                </VStack>
              </VStack>
            </SimpleGrid>
            <VStack spacing="6">
              <Box maxH="300px" position="relative" width="100%" height="300px">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="/community-thumbnail.png"
                  alt="Community Image"
                  width="564px"
                  height="300px"
                />
              </Box>
              <VStack alignItems="start">
                <Text fontSize="xl" color="brand.black" fontWeight="medium">
                  The Community
                </Text>
                <Flex direction="column">
                  <Text color="brand.grey-70">
                    Community is the reason how and why Shardeum will remain
                    decentralized, secure and infinitely scalable
                  </Text>
                  <Link href="/#" passHref>
                    <Text as="a" color="brand.blue" mt="2" _hover={{color: 'brand.blue-70'}} fontWeight="medium">
                      Know More
                    </Text>
                  </Link>
                </Flex>
              </VStack>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Flex>
  );
}

export default Team;