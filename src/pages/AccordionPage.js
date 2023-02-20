import Accordion from "../components/Accordion";

const AccordionPage = () => {

    const items = [
        {
            id: 1,
            label: 'Can I use React on a project',
            content: 'You can use React on any project you want'
        },
        {
            id: 2,
            label: 'Can I use Javascript on a project',
            content: 'You can use Javascript on any project you want'
        },
        {
            id: 3,
            label: 'Can I use .NET on a project',
            content: 'You can use .NET on any project you want'
        },
    ]

    return (
        <Accordion items={items} />
    );
}

export default AccordionPage;