import { useToast } from "@chakra-ui/react";

export const Toast = ({ name, description, statuscode }) => {
  const toast = useToast();
  return toast({ 
    title: { name },
    description: { description },
    status: { statuscode },
    duration: 5000,
    isClosable: true,
  });
};
