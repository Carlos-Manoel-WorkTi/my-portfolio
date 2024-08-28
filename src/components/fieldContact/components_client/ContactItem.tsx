'use client'

import "../FieldContact.css"

export function ContactItem({ id, label, value }: { id: string; label: string; value: string }) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(value).then(() => {
            alert('Texto copiado para a área de transferência!');
        }, () => {
            alert('Falha ao copiar o texto.');
        });
    };

    return (
        <div className="contactItem">
            <label htmlFor={id}>{label}:</label>
            <span id={id}>{value}</span>
            <button className="copyButton" onClick={copyToClipboard}>
                Copiar
            </button>
        </div>
    );
}