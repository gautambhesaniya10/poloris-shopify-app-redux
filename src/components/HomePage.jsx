import React from 'react'
// import { Page, SkeletonBodyText } from '@shopify/polaris'
import {
    Card,
    Page,
    Layout,
    TextContainer,
    Image,
    Stack,
    Link,
    Heading,
    Button
} from "@shopify/polaris";

import signupimg from "../assets/signupImg.png";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
 let navigate = useNavigate();

    const loginHandler = (route) => {
        if (route === "login") {
            // window.open(
            //     `http://localhost:3000/login`,
            //     "_blank",
            //     "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=200,width=600,height=650"
            //   );
            navigate("/login")
        }
    }
    const signUpHandler = (route) => {
        if (route === "signup") {
            // window.open(
            //     `http://localhost:3000/signup`,
            //     "_blank",
            //     "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=200,width=600,height=650"
            //   );
            navigate("/signup")
        }
    }
    return (
        <>
            <div>
                <Page fullWidth>
                    <Layout>
                        <Layout.Section>
                            <Card sectioned>
                                <Stack>
                                    <Stack.Item>
                                        <div style={{ padding: "30px 20px" }}>
                                            <Image
                                                source={logo}
                                                alt="Nice work on building a Shopify app"
                                                width={200}
                                            />
                                        </div>
                                    </Stack.Item>
                                </Stack>
                                <Stack wrap={false}
                                    spacing="extraTight"
                                    distribution="trailing"
                                    alignment="center">
                                    <Stack.Item fill>
                                        <TextContainer spacing="loose">
                                            <Heading>Sell Your Product On Downtown</Heading>
                                            <p>
                                                Reach Shoppers while they're browsing trending posts in market place
                                            </p>
                                            <Button onClick={()=> loginHandler("login")}>Connect Account</Button>
                                            <p>
                                                <Link onClick={() => signUpHandler("signup")}>
                                                    Sign up for Downtown
                                                </Link>
                                            </p>
                                        </TextContainer>
                                    </Stack.Item>
                                    {/* <Stack.Item>
                                        <Badge>Paid</Badge>
                                    </Stack.Item> */}
                                    <Stack.Item>
                                        <div
                                            style={{
                                                padding: "0 20px",
                                                marginTop: "-120px",
                                                marginBottom: "-20px",
                                            }}
                                        >
                                            <Image
                                                source={signupimg}
                                                alt="Nice work on building a Shopify app"
                                                width={200}
                                            />
                                        </div>
                                    </Stack.Item>
                                </Stack>
                            </Card>
                        </Layout.Section>
                    </Layout>
                </Page>
            </div>
        </>
    )
}

export default HomePage