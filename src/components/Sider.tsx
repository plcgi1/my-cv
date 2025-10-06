import React from 'react';
import { Image, Card, Flex, Typography, Avatar, Button, List, Skeleton } from 'antd';
import { LanguageStrings, Skill, } from '@/types'

const { Meta } = Card;

interface SkillsProps {
    strings: LanguageStrings;
    skills: Skill[] | null;
}

const cardStyle: React.CSSProperties = {
    width: '100%',
};
//
// const imgStyle: React.CSSProperties = {
//     display: 'block',
//     width: '200',
// };

export const MySider: React.FC<SkillsProps> = ({ strings, skills }) => {
    // return (
    //     <Card
    //         hoverable
    //         style={{ width: 240 }}
    //         cover={
    //             <Image.PreviewGroup
    //                 items={[
    //                     '/images/avatars/ava.png',
    //                 ]}
    //             >
    //                 <Image
    //                     width={200}
    //                     src="/images/avatars/ava.png"
    //                 />
    //             </Image.PreviewGroup>
    //         }
    //     >
    //         <Meta title="Europe Street beat" description="www.instagram.com" />
    //     </Card>
    // )
    // return (
    //     <Image.PreviewGroup
    //         items={[
    //             '/images/avatars/ava.png',
    //         ]}
    //     >
    //         <Image
    //             width={200}
    //             src="/images/avatars/ava.png"
    //         />
    //     </Image.PreviewGroup>
    // )
    return (
        <Card style={cardStyle}>
            <Flex justify="space-between">
                <Image
                    preview={false}
                                width={800}
                                src="/images/avatars/ava.png"
                            />
                <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>

                </Flex>
            </Flex>
            <Meta title="Носов Александр Анатольевич" description="www.instagram.com" />
        </Card>
    )

}