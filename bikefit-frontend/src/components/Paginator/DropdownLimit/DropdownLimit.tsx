import { Dropdown } from "react-bootstrap";

interface dropdownLimitProps {
    limit: number,
    changeLimit: (limit: number) => void;
}

const DropdownLimit = ({ limit, changeLimit }: dropdownLimitProps) => {
    return (
        <Dropdown className="d-inline" style={{ marginRight: "5px" }}>
            <Dropdown.Toggle id="dropdown-autoclose-true" variant="dark">
                Qtd ({limit})
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#" onClick={() => changeLimit(10)}>
                    Mostrar 10
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => changeLimit(20)}>
                    Mostrar 20
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => changeLimit(50)}>
                    Mostrar 50
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => changeLimit(2)}>
                    Mostrar 2
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownLimit