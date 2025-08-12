import { useMemo, useState } from 'react';
import { FormState, IBikeFit, IBikeFitCreationPayload } from '../../../types';
import { BikeFitService } from '../../../services';

const useBikeFitFormPage = (item?: IBikeFit, bikeIdFromUrl?: string) => {
    const [isSaving, setIsSaving] = useState<boolean>(false);

    const initialData: FormState | undefined = useMemo(() => {
        if (item) {
            return {
                bikeId: item.bikeId,
                postureAvaliationId: item.postureAvaliationId,
                userId: item.userId,
                shortTermGoal: item.shortTermGoal,
                longTermGoal: item.longTermGoal,
                stemHeightBefore: item.stemHeightBefore,
                stemHeightAfter: item.stemHeightAfter,
                stemLengthBefore: item.stemLengthBefore,
                stemLengthAfter: item.stemLengthAfter,
                stemLengthImageBefore: item.stemLengthImageBefore,
                stemLengthImageAfter: item.stemLengthImageAfter,
                stemAngleBefore: item.stemAngleBefore,
                stemAngleAfter: item.stemAngleAfter,
                saddleLengthBefore: item.saddleLengthBefore,
                saddleLengthAfter: item.saddleLengthAfter,
                saddleWidthBefore: item.saddleWidthBefore,
                saddleWidthAfter: item.saddleWidthAfter,
                saddleTiltBefore: item.saddleTiltBefore,
                saddleTiltAfter: item.saddleTiltAfter,
                handlebarWidthBefore: item.handlebarWidthBefore,
                handlebarWidthAfter: item.handlebarWidthAfter,
                handlebarRiseBefore: item.handlebarRiseBefore,
                handlebarRiseAfter: item.handlebarRiseAfter,
                handlebarReachBefore: item.handlebarReachBefore,
                handlebarReachAfter: item.handlebarReachAfter,
                handlebarDropBefore: item.handlebarDropBefore,
                handlebarDropAfter: item.handlebarDropAfter,
                seatpostLengthBefore: item.seatpostLengthBefore,
                seatpostLengthAfter: item.seatpostLengthAfter,
                seatpostOffsetBefore: item.seatpostOffsetBefore,
                seatpostOffsetAfter: item.seatpostOffsetAfter,
                trunkUpperLimbAngleBefore: item.trunkUpperLimbAngleBefore,
                trunkUpperLimbAngleImageBefore: item.trunkUpperLimbAngleImageBefore,
                trunkUpperLimbAngleAfter: item.trunkUpperLimbAngleAfter,
                trunkUpperLimbAngleImageAfter: item.trunkUpperLimbAngleImageAfter,
                trunkFlexionAngleBefore: item.trunkFlexionAngleBefore,
                trunkFlexionAngleImageBefore: item.trunkFlexionAngleImageBefore,
                trunkFlexionAngleAfter: item.trunkFlexionAngleAfter,
                trunkFlexionAngleImageAfter: item.trunkFlexionAngleImageAfter,
                elbowFlexionAngleBefore: item.elbowFlexionAngleBefore,
                elbowFlexionAngleImageBefore: item.elbowFlexionAngleImageBefore,
                elbowFlexionAngleAfter: item.elbowFlexionAngleAfter,
                elbowFlexionAngleImageAfter: item.elbowFlexionAngleImageAfter,
                shoulderElbowRecoilAngleBefore: item.shoulderElbowRecoilAngleBefore,
                shoulderElbowRecoilAngleImageBefore: item.shoulderElbowRecoilAngleImageBefore,
                shoulderElbowRecoilAngleAfter: item.shoulderElbowRecoilAngleAfter,
                shoulderElbowRecoilAngleImageAfter: item.shoulderElbowRecoilAngleImageAfter,
                kneeFlexionAngleBefore: item.kneeFlexionAngleBefore,
                kneeFlexionAngleAfter: item.kneeFlexionAngleAfter,
                kneeFlexionAngleImageBefore: item.kneeFlexionAngleImageBefore,
                kneeFlexionAngleImageAfter: item.kneeFlexionAngleImageAfter,
                plantarFlexionAngleBefore: item.plantarFlexionAngleBefore,
                plantarFlexionAngleAfter: item.plantarFlexionAngleAfter,
                plantarFlexionAngleImageBefore: item.plantarFlexionAngleImageBefore,
                plantarFlexionAngleImageAfter: item.plantarFlexionAngleImageAfter,
                dorsiflexionAngleBefore: item.dorsiflexionAngleBefore,
                dorsiflexionAngleAfter: item.dorsiflexionAngleAfter,
                dorsiflexionAngleImageBefore: item.dorsiflexionAngleImageBefore,
                dorsiflexionAngleImageAfter: item.dorsiflexionAngleImageAfter,
                kopsBefore: item.kopsBefore,
                kopsAfter: item.kopsAfter,
                kopsImageBefore: item.kopsImageBefore,
                kopsImageAfter: item.kopsImageAfter,
                crankArmLengthBefore: item.crankArmLengthBefore,
                crankArmLengthAfter: item.crankArmLengthAfter,
                crankArmQFactorBefore: item.crankArmQFactorBefore,
                crankArmQFactorAfter: item.crankArmQFactorAfter,
                videoBefore: item.videoBefore,
                videoAfter: item.videoAfter,
                observationBefore: item.observationBefore,
                observationAfter: item.observationAfter,
                additionalInformation: item.additionalInformation,
            };
        }
        if (bikeIdFromUrl) {
            return {
                bikeId: Number(bikeIdFromUrl),
            };
        }
        return undefined;
    }, [item, bikeIdFromUrl]);

    const isUpdating = !!item;

    const handleFormSubmit = async (formData: FormState) => {
        setIsSaving(true);
        try {
            const bikeFitPayload: IBikeFitCreationPayload = {
                bikeId: formData.bikeId as number,
                postureAvaliationId: formData.postureAvaliationId as number,
                userId: formData.userId ? (formData.userId as number) : undefined,
                shortTermGoal: (formData.shortTermGoal as string) || undefined,
                longTermGoal: (formData.longTermGoal as string) || undefined,
                stemHeightBefore: formData.stemHeightBefore ? Number(formData.stemHeightBefore) : undefined,
                stemHeightAfter: formData.stemHeightAfter ? Number(formData.stemHeightAfter) : undefined,
                stemLengthBefore: formData.stemLengthBefore ? Number(formData.stemLengthBefore) : undefined,
                stemLengthAfter: formData.stemLengthAfter ? Number(formData.stemLengthAfter) : undefined,
                stemLengthImageBefore: formData.stemLengthImageBefore as string || undefined,
                stemLengthImageAfter: formData.stemLengthImageAfter as string || undefined,
                stemAngleBefore: formData.stemAngleBefore ? Number(formData.stemAngleBefore) : undefined,
                stemAngleAfter: formData.stemAngleAfter ? Number(formData.stemAngleAfter) : undefined,
                saddleLengthBefore: formData.saddleLengthBefore ? Number(formData.saddleLengthBefore) : undefined,
                saddleLengthAfter: formData.saddleLengthAfter ? Number(formData.saddleLengthAfter) : undefined,
                saddleWidthBefore: formData.saddleWidthBefore ? Number(formData.saddleWidthBefore) : undefined,
                saddleWidthAfter: formData.saddleWidthAfter ? Number(formData.saddleWidthAfter) : undefined,
                saddleTiltBefore: formData.saddleTiltBefore ? Number(formData.saddleTiltBefore) : undefined,
                saddleTiltAfter: formData.saddleTiltAfter ? Number(formData.saddleTiltAfter) : undefined,
                handlebarWidthBefore: formData.handlebarWidthBefore ? Number(formData.handlebarWidthBefore) : undefined,
                handlebarWidthAfter: formData.handlebarWidthAfter ? Number(formData.handlebarWidthAfter) : undefined,
                handlebarRiseBefore: formData.handlebarRiseBefore ? Number(formData.handlebarRiseBefore) : undefined,
                handlebarRiseAfter: formData.handlebarRiseAfter ? Number(formData.handlebarRiseAfter) : undefined,
                handlebarReachBefore: formData.handlebarReachBefore ? Number(formData.handlebarReachBefore) : undefined,
                handlebarReachAfter: formData.handlebarReachAfter ? Number(formData.handlebarReachAfter) : undefined,
                handlebarDropBefore: formData.handlebarDropBefore ? Number(formData.handlebarDropBefore) : undefined,
                handlebarDropAfter: formData.handlebarDropAfter ? Number(formData.handlebarDropAfter) : undefined,
                seatpostLengthBefore: formData.seatpostLengthBefore ? Number(formData.seatpostLengthBefore) : undefined,
                seatpostLengthAfter: formData.seatpostLengthAfter ? Number(formData.seatpostLengthAfter) : undefined,
                seatpostOffsetBefore: formData.seatpostOffsetBefore ? Number(formData.seatpostOffsetBefore) : undefined,
                seatpostOffsetAfter: formData.seatpostOffsetAfter ? Number(formData.seatpostOffsetAfter) : undefined,
                trunkUpperLimbAngleBefore: formData.trunkUpperLimbAngleBefore ? Number(formData.trunkUpperLimbAngleBefore) : undefined,
                trunkUpperLimbAngleImageBefore: formData.trunkUpperLimbAngleImageBefore as string || undefined,
                trunkUpperLimbAngleAfter: formData.trunkUpperLimbAngleAfter ? Number(formData.trunkUpperLimbAngleAfter) : undefined,
                trunkUpperLimbAngleImageAfter: formData.trunkUpperLimbAngleImageAfter as string || undefined,
                trunkFlexionAngleBefore: formData.trunkFlexionAngleBefore ? Number(formData.trunkFlexionAngleBefore) : undefined,
                trunkFlexionAngleImageBefore: formData.trunkFlexionAngleImageBefore as string || undefined,
                trunkFlexionAngleAfter: formData.trunkFlexionAngleAfter ? Number(formData.trunkFlexionAngleAfter) : undefined,
                trunkFlexionAngleImageAfter: formData.trunkFlexionAngleImageAfter as string || undefined,
                elbowFlexionAngleBefore: formData.elbowFlexionAngleBefore ? Number(formData.elbowFlexionAngleBefore) : undefined,
                elbowFlexionAngleImageBefore: formData.elbowFlexionAngleImageBefore as string || undefined,
                elbowFlexionAngleAfter: formData.elbowFlexionAngleAfter ? Number(formData.elbowFlexionAngleAfter) : undefined,
                elbowFlexionAngleImageAfter: formData.elbowFlexionAngleImageAfter as string || undefined,
                shoulderElbowRecoilAngleBefore: formData.shoulderElbowRecoilAngleBefore ? Number(formData.shoulderElbowRecoilAngleBefore) : undefined,
                shoulderElbowRecoilAngleImageBefore: formData.shoulderElbowRecoilAngleImageBefore as string || undefined,
                shoulderElbowRecoilAngleAfter: formData.shoulderElbowRecoilAngleAfter ? Number(formData.shoulderElbowRecoilAngleAfter) : undefined,
                shoulderElbowRecoilAngleImageAfter: formData.shoulderElbowRecoilAngleImageAfter as string || undefined,
                kneeFlexionAngleBefore: formData.kneeFlexionAngleBefore ? Number(formData.kneeFlexionAngleBefore) : undefined,
                kneeFlexionAngleAfter: formData.kneeFlexionAngleAfter ? Number(formData.kneeFlexionAngleAfter) : undefined,
                kneeFlexionAngleImageBefore: formData.kneeFlexionAngleImageBefore as string || undefined,
                kneeFlexionAngleImageAfter: formData.kneeFlexionAngleImageAfter as string || undefined,
                plantarFlexionAngleBefore: formData.plantarFlexionAngleBefore ? Number(formData.plantarFlexionAngleBefore) : undefined,
                plantarFlexionAngleAfter: formData.plantarFlexionAngleAfter ? Number(formData.plantarFlexionAngleAfter) : undefined,
                plantarFlexionAngleImageBefore: formData.plantarFlexionAngleImageBefore as string || undefined,
                plantarFlexionAngleImageAfter: formData.plantarFlexionAngleImageAfter as string || undefined,
                dorsiflexionAngleBefore: formData.dorsiflexionAngleBefore ? Number(formData.dorsiflexionAngleBefore) : undefined,
                dorsiflexionAngleAfter: formData.dorsiflexionAngleAfter ? Number(formData.dorsiflexionAngleAfter) : undefined,
                dorsiflexionAngleImageBefore: formData.dorsiflexionAngleImageBefore as string || undefined,
                dorsiflexionAngleImageAfter: formData.dorsiflexionAngleImageAfter as string || undefined,
                kopsBefore: formData.kopsBefore ? Number(formData.kopsBefore) : undefined,
                kopsAfter: formData.kopsAfter ? Number(formData.kopsAfter) : undefined,
                kopsImageBefore: formData.kopsImageBefore as string || undefined,
                kopsImageAfter: formData.kopsImageAfter as string || undefined,
                crankArmLengthBefore: formData.crankArmLengthBefore ? Number(formData.crankArmLengthBefore) : undefined,
                crankArmLengthAfter: formData.crankArmLengthAfter ? Number(formData.crankArmLengthAfter) : undefined,
                crankArmQFactorBefore: formData.crankArmQFactorBefore ? Number(formData.crankArmQFactorBefore) : undefined,
                crankArmQFactorAfter: formData.crankArmQFactorAfter ? Number(formData.crankArmQFactorAfter) : undefined,
                videoBefore: formData.videoBefore as string || undefined,
                videoAfter: formData.videoAfter as string || undefined,
                observationBefore: (formData.observationBefore as string) || undefined,
                observationAfter: (formData.observationAfter as string) || undefined,
                additionalInformation: (formData.additionalInformation as string) || undefined,
            };

            if (isUpdating) {
                await BikeFitService.patchBikeFit(item!.id, bikeFitPayload);
            } else {
                await BikeFitService.addBikeFit(bikeFitPayload);
            }
        } catch (error) {
            console.error('Erro ao salvar bikefit:', error);
            alert('Ocorreu um erro ao salvar o bikefit. Tente novamente.');
        } finally {
            setIsSaving(false);
        }
    };

    return { initialData, handleFormSubmit, isSaving };
};

export default useBikeFitFormPage;