import { Box, Flex, Image, Text } from "@chakra-ui/react";
import imgPhoneBook from '../../img/pngwing.com.png';
// const styles = {
//    container: {
//      minHeight: 'calc(100vh - 50px)',
//      display: 'flex',
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//    title: {
//      fontWeight: 500,
//      fontSize: 48,
//      textAlign: 'center',
//    },
//  };
//  style={styles.container}

 export default function Home() {
   return (
     <div >
      <Flex flexWrap="wrap" >
        <Text fontSize='4xl'>
         Personal phone book
        </Text>
        <Box boxSize='sm'>
          <Image src={imgPhoneBook} alt='Phone book' 
          objectFit='cover'
          boxSize='100%'
          />
        </Box>
      </Flex>
     </div>
   );
 }