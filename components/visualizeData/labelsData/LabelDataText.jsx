import React from 'react'
import { Card, Text, Badge, Group } from '@mantine/core';
import { DownOutlined, } from '@ant-design/icons';

export const LabelDataText = ({ type = "", title = "", }) => {
    return (
        <Card shadow="sm" padding="sm" radius="md" withBorder className='m-3'  >
            <Group justify="space-between"  >
                <Text fw={500} size='sm'  >{type}</Text>
                <Badge color="blue" variant="light">
                    <DownOutlined />
                </Badge>
            </Group>
            <Text size="sm" c="dimmed">
                {title}
            </Text>
        </Card>
    )
}