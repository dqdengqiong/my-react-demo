/*
 * @Description:
 * @Author: deng.qiong
 * @Date: 2021-02-19 16:32:30
 * @LastEditors: deng.qiong
 * @LastEditTime: 2021-02-19 18:20:13
 */
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Modal } from 'antd';

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
interface Iprops {
    moduleId?: number;
    versionId?: number;
    tableColumns: object[];
    UpdateList: (page: object, filter: object) => Promise<void>;
}
const Addmodal: React.FC<Iprops> = (props) => {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState<boolean>();
    const [data, setData] = useState<any>();

    useEffect(() => {
        setData({ module_id: props.moduleId });
    }, [props.moduleId]);
    const showModal = () => {
      var a = 1
        setVisible(true);
    };

    const handleOk = async () => {
        await form.validateFields();
        setVisible(false);
        props.UpdateList({ current: 1 }, {});
    };

    const handleCancel = () => {
        setVisible(false);
    };
    const onChange = (e: any) => {
        const { name } = e.target;
        const { value } = e.target;
        const obj: any = {};
        obj[name] = value;
        setData({ ...data, ...obj });
    };
    const formItem = props.tableColumns.map((item: any) => {
        if (item.dataIndex !== 'operation') {
            return (
                <Form.Item
                    {...formItemLayout}
                    label={item.title}
                    key={item.dataIndex}
                    name={item.dataIndex}
                    rules={[
                        {
                            required: true,
                            message: item.title,
                        },
                    ]}
                >
                    <Input
                        placeholder={`请输入${item.title}`}
                        name={item.dataIndex}
                        onChange={onChange}
                    />
                </Form.Item>
            );
        }
        return false;
    });
    return (
        <>
            <Button type="primary" onClick={showModal} disabled={!props.moduleId}>
                新建
            </Button>
            <Modal
                visible={visible}
                title="新建"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        取消
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        提交
                    </Button>,
                ]}
            >
                <Form form={form} id="form" name="dynamic_rule">
                    <input name="module_id" type="hidden" value={props.moduleId} />
                    {formItem}
                </Form>
            </Modal>
        </>
    );
};

export default Addmodal;
