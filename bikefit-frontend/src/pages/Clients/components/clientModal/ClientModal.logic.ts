import { useState } from "react";
import { ClientService } from "../../../../services";
import { FormState, IClient, IClientCreationPayload } from "../../../../types";

interface ClientModalProps {
    item?: IClient;
    getClients: () => Promise<void>;
}


const useClientModal = ({ item, getClients }: ClientModalProps) => {
    const isUpdating = !!item;
    const [show, setShow] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialData: FormState | undefined = item
        ? ({
            name: item.name,
            email: item.email,
            sex: item.sex,
            birthDate: item.birthDate,
            cellphone: item.cellphone,
            profession: item.profession,
            observations: item.observations,
        } as FormState)
        : undefined;

    const handleFormSubmit = async (formData: FormState) => {
        setIsSaving(true);
        try {
            const clientPayload: IClientCreationPayload = {
                name: String(formData.name),
                email: String(formData.email),
                sex: String(formData.sex),
                birthDate: String(formData.birthDate),
                cellphone: String(formData.cellphone),
                profession: formData.profession ? String(formData.profession) : undefined,
                observations: formData.observations ? String(formData.observations) : undefined,
            };

            if (isUpdating) {
                await ClientService.patchClient(item!.id, clientPayload);
            } else {
                await ClientService.addClient(clientPayload);
            }

            handleClose();
            await getClients();
        } catch (error) {
            console.error('Erro ao salvar cliente:', error);
            alert('Ocorreu um erro ao salvar o cliente. Tente novamente.');
        } finally {
            setIsSaving(false);
        }
    };
    return { handleShow, handleClose, show, initialData, handleFormSubmit, isUpdating, isSaving }
}

export default useClientModal;