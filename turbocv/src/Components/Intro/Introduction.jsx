import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import './introduction.css';
import homeLogo from './../../Assets/home-logo.png'
import { Image } from '@chakra-ui/react'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Helmet } from 'react-helmet';

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }


    return (
        <>
            <Helmet>
                <title>ATS_Resume Builder - Create Your ATS Resume in Minutes</title>
                <meta name="description" content="Welcome to ATS_TurboCV Builder, where your journey to crafting a standout ATS-friendly resume begins! In today's competitive job market, Applicant Tracking Systems (ATS) play a crucial role in sorting through resumes. Our mission is to empower you with a user-friendly platform that streamlines the resume creation process, ensuring your application gets noticed.!" />
                <meta name="keywords" content="resume builder, online resume builder, professional resume, resume templates, resume designs, resume generator, resume creator, resume maker, build resume, create resume, download resume" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Anurag Kumar" />
                <meta property="og:image" content="https://avatars.githubusercontent.com/u/77048227?v=4" />
                <meta property="og:url" content="https://turbocv.netlify.app/" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
                <Stack
                    width={{ base: '95%', md: '47%' }}
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 1.5, md: 10, sm: '14' }}>

                    {
                        selectBtn
                            ?
                            <>
                                <Heading
                                    fontWeight={600}
                                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                    lineHeight={'110%'}>
                                    Your resume in three{' '}
                                    <Text as={'span'} color={'#38B2AC'}>
                                        easy {' '}
                                    </Text>
                                    steps
                                </Heading>

                                <Text color={'gray.600'} maxW={'3xl'}>
                                ATS_TurboCV Builder is your one-stop shop for creating ATS-friendly resumes that get you noticed. In minutes, you can build a professional resume optimized to bypass applicant tracking systems (ATS) and land you the interviews you deserve.
                                <br/>Stop waiting for your ideal job to come to you. Take control and create a resume that gets results. Use ATS_Resume Builder and unlock your career potential.
                                </Text>

                                <Flex _dark={{ color: 'gray.50' }} textAlign={'start'} flexDirection={'column'} w={'full'}>
                                    <Box className='Bullet_Points'>
                                        <Button>1</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Select a template from our collection.
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button>2</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Build you resume using our easy to use resume builder.
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button>3</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Download your resume.
                                        </Text>
                                    </Box>
                                </Flex>
                            </>
                            :
                            <Heading
                                m={'1.5'}
                                textAlign={{ base: 'center', md: 'start' }}
                                fontWeight={600}
                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                lineHeight={'110%'}>
                                Select a {' '}
                                <Text as={'span'} color={'#38B2AC'}>
                                    Template {' '}
                                </Text>
                                from the list
                            </Heading>
                    }
                </Stack>

                {
                    selectBtn ?
                        <Stack>
                            <Image src={homeLogo} alt='home logo' my={'4'} />
                            <Button
                                onClick={handleSelectTemplate}
                                rounded={'full'}
                                px={6}
                                className='mb-4'
                                colorScheme={'teal'}
                                bg={'#38B2AC'}
                                _hover={{ bg: '#319795' }}>
                                Select Template
                            </Button>
                        </Stack>
                        :
                        <>
                            <Box maxW={{ base: '100%', md: '61%' }} className="templatesList">
                                {
                                    ThemeTemplateData.map((item, index) => {
                                        return <div key={index} className="template" onClick={showTheme}>
                                            <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                        </div>
                                    })
                                }
                            </Box>
                        </>
                }
            </Container>
        </>

    );
}
