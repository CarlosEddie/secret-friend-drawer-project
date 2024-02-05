import Footer from "../components/Footer"
import Form from "../components/Form"
import ParticipantList from "../components/ParticipantList"
import Card from "../components/card"

const Setting = () => {
    return (
        <Card>
            <section>
                <h2>Let's start!</h2>
                <Form />
                <ParticipantList />
                <Footer />
            </section>
        </Card>
    )
}

export default Setting