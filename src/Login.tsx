import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from "native-base";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./componentes/Titulo";

import { Logo } from "./assets/logo.png";

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image src={Logo} alt="Logo Voll" />

      <Titulo>
        Faça login em sua conta
      </Titulo>

      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input 
            placeholder="Insira seu endereço de email" size="lg" w="100%" 
            borderRadius="lg" bgColor="gray.100" shadow={3} />
        </FormControl>

        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input 
            placeholder="Insira sua senha" size="lg" w="100%" 
            borderRadius="lg" bgColor="gray.100" shadow={3} />
        </FormControl>
      </Box>

      <Button w="100%" bgColor="blue.800" mt={10} borderRadius="lg">
        Entrar
      </Button>

      <Link href="#" mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem conta?</Text>

        <TouchableOpacity>
          <Text color="blue.500">Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>

    </VStack>
  );
}