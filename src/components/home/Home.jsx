import React, { useContext, useEffect } from "react";
import Layout from "../theme/Theme";
import { Container, Flex } from "../../styles/GlobalStyles";
import { GlobalContext } from "../../context/GlobalContext";
import {
    H1, H2, H3, H4, H5, H6,
    P,
    Button,
} from "../../styles/HomeStyles";
const Home = () => {

    const { theme, themeSwitchHandler } = useContext(GlobalContext);

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <Container>
            <Flex column center>
                <H1>Hello</H1>
            </Flex>
            <P>
                What's up! Toggle the switch above to change the theme
            </P>
            <a href="/">test</a>
            <P>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit quis ipsa, sunt, consectetur voluptate dolores
                pariatur nisi distinctio iusto vero iure officia. Vero sunt,
                ducimus sit eveniet dolor impedit itaque voluptate ipsam!
                Omnis totam, beatae dicta fugit praesentium fugiat dolores
                laborum, officiis, labore aperiam tempore! Debitis, provident!
                Rem, exercitationem enim?
            </P>
            <Container>
                <Flex column>
                    <H4>Article</H4>
                    <P>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit quis ipsa, sunt, consectetur voluptate dolores
                        pariatur nisi distinctio iusto vero iure officia. Vero sunt,
                        ducimus sit eveniet dolor impedit itaque voluptate ipsam!
                        Omnis totam, beatae dicta fugit praesentium fugiat dolores
                        laborum, officiis, labore aperiam tempore! Debitis, provident!
                        Rem, exercitationem enim?
                    </P>
                    <P>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit quis ipsa, sunt, consectetur voluptate dolores
                        pariatur nisi distinctio iusto vero iure officia. Vero sunt,
                        ducimus sit eveniet dolor impedit itaque voluptate ipsam!
                        Omnis totam, beatae dicta fugit praesentium fugiat dolores
                        laborum, officiis, labore aperiam tempore! Debitis, provident!
                        Rem, exercitationem enim?
                    </P>
                    <P>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit quis ipsa, sunt, consectetur voluptate dolores
                        pariatur nisi distinctio iusto vero iure officia. Vero sunt,
                        ducimus sit eveniet dolor impedit itaque voluptate ipsam!
                        Omnis totam, beatae dicta fugit praesentium fugiat dolores
                        laborum, officiis, labore aperiam tempore! Debitis, provident!
                        Rem, exercitationem enim?
                    </P>
                    <P>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit quis ipsa, sunt, consectetur voluptate dolores
                        pariatur nisi distinctio iusto vero iure officia. Vero sunt,
                        ducimus sit eveniet dolor impedit itaque voluptate ipsam!
                        Omnis totam, beatae dicta fugit praesentium fugiat dolores
                        laborum, officiis, labore aperiam tempore! Debitis, provident!
                        Rem, exercitationem enim?
                    </P>
                    <P>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit quis ipsa, sunt, consectetur voluptate dolores
                        pariatur nisi distinctio iusto vero iure officia. Vero sunt,
                        ducimus sit eveniet dolor impedit itaque voluptate ipsam!
                        Omnis totam, beatae dicta fugit praesentium fugiat dolores
                        laborum, officiis, labore aperiam tempore! Debitis, provident!
                        Rem, exercitationem enim?
                    </P>
                    <P>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit quis ipsa, sunt, consectetur voluptate dolores
                        pariatur nisi distinctio iusto vero iure officia. Vero sunt,
                        ducimus sit eveniet dolor impedit itaque voluptate ipsam!
                        Omnis totam, beatae dicta fugit praesentium fugiat dolores
                        laborum, officiis, labore aperiam tempore! Debitis, provident!
                        Rem, exercitationem enim?
                    </P>
                    <P>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit quis ipsa, sunt, consectetur voluptate dolores
                        pariatur nisi distinctio iusto vero iure officia. Vero sunt,
                        ducimus sit eveniet dolor impedit itaque voluptate ipsam!
                        Omnis totam, beatae dicta fugit praesentium fugiat dolores
                        laborum, officiis, labore aperiam tempore! Debitis, provident!
                        Rem, exercitationem enim?
                    </P>
                </Flex>
                <Button onClick={() => { console.log('ass') }}>ascssssssssac</Button>

            </Container>

        </Container>
    );
};

export default Home;