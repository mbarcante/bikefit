import { useState } from "react";
import { UserService, AuthService } from "../../../../services";
import { FormState, IUser, IUserCreationPayload } from "../../../../types";

interface UserModalProps {
    item?: IUser;
    getUsers: () => Promise<void>;
}

const useUserModal = ({ item, getUsers }: UserModalProps) => {
    const isUpdating = !!item;
    const [show, setShow] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialData: FormState | undefined = item
        ? ({
            id: Number(item.id),
            name: item.name,
            email: item.email,
        } as FormState)
        : undefined;

    const handleFormSubmit = async (formData: FormState) => {
        setIsSaving(true);
        try {
            const userPayload: IUserCreationPayload = {
                name: String(formData.name),
                email: String(formData.email),
                password: String(formData.password),
            };

            if (isUpdating) {
                if (item!.id === undefined) {
                    throw new Error("ID do usuário indefinido para atualização.");
                }
                await UserService.patchUser(item!.id, userPayload);
            } else {
                await AuthService.register(userPayload);
            }

            handleClose();
            await getUsers();
        } catch (error) {
            console.error('Erro ao salvar cliente:', error);
            alert('Ocorreu um erro ao salvar o cliente. Tente novamente.');
        } finally {
            setIsSaving(false);
        }
    };
    return { handleShow, handleClose, show, initialData, handleFormSubmit, isUpdating, isSaving }
}

export default useUserModal;