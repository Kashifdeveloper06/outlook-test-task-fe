import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { MdOpenInNew } from "react-icons/md";

export const EmailDetailsModal = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button color="primary" onClick={() => setOpenModal(true)}>
                <div className="flex items-center gap-x-2">
                    <MdOpenInNew className="text-lg" />
                    Open
                </div>
            </Button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className="h-full pt-16 bg-gray-900 bg-opacity-80 flex items-center ">
                <Modal.Header className="border-b-0 p-2 text-[30px]"></Modal.Header>
                <Modal.Body className="pt-0">
                    <div className="w-full flex items-center">
                        <div className="w-[80%] flex items-center">
                            <div className="w-[20%] h-full ">
                                <div className="w-[70px] bg-red-500 h-[70px] flex items-center justify-center rounded-[50%]">Image</div>
                            </div>
                            <div className="w-[80%] h-full flex flex-col">
                                <span className="mb-2 font-[500]">Name</span>
                                <span className="text-[gray] text-opacity-[80%]">Email</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto py-3">
                        <p className="font-[700] text-[20px]">Website Hosting Reviews Free The Best Resource </p>
                    </div>
                    <div className="overflow-y-auto h-[200px] scrollBar">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laboriosam, deserunt beatae repellendus, optio sit quaerat quod nisi illo rem quo accusamus animi inventore ut in porro aspernatur, consequatur aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus laborum iusto. Minima provident error, perspiciatis, hic expedita similique, quibusdam amet maiores accusamus possimus ducimus nobis necessitatibus mollitia incidunt? Eveniet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae provident cumque atque impedit, eos, sint voluptates odio dolores delectus eligendi accusamus vel repellat! Perspiciatis eaque architecto earum laborum nostrum ullam.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laboriosam, deserunt beatae repellendus, optio sit quaerat quod nisi illo rem quo accusamus animi inventore ut in porro aspernatur, consequatur aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus laborum iusto. Minima provident error, perspiciatis, hic expedita similique, quibusdam amet maiores accusamus possimus ducimus nobis necessitatibus mollitia incidunt? Eveniet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae provident cumque atque impedit, eos, sint voluptates odio dolores delectus eligendi accusamus vel repellat! Perspiciatis eaque architecto earum laborum nostrum ullam.
                        </p>
                    </div>
                    <div className="mt-6 leading-6">
                        <h1 className="text-opacity-[80%] text-[gray]">Best Regards</h1>
                        <h2 className="text-opacity-[80%] text-[gray]">Bonnie Green, CEO Themesberg LLC</h2>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    );
};