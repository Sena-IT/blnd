import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
export async function POST(req: NextRequest) {


    try {
        const { user_data, products, total_amount } = await req.json();

       
        const {
            email,
            firstName,
            lastName,
            company,
            address,
            apartment,
            city,
            pinCode,
            phoneNumber
        } = user_data;

   
        if (!email || !firstName || !lastName) {
            return NextResponse.json({
                success: false,
                message: "Missing required fields: email, firstName, and lastName are required"
            }, { status: 400 });
        }

        if (!products || !Array.isArray(products) || products.length === 0) {
            return NextResponse.json({
                success: false,
                message: "Products array is required and must not be empty"
            }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({
                success: false,
                message: "Invalid email format"
            }, { status: 400 });
        }

       
        const calculatedTotal = total_amount || products.reduce((sum, product) => sum + (product.price * product.quantity), 0);

        const productsHTML = products.map(product => `
        <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 15px 10px; vertical-align: top;">
                <div style="display: flex; align-items: center;">
                    <div style="margin-right: 15px;">
                        <img src="${product.image}" alt="${product.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; border: 1px solid #ddd;" />
                    </div>
                    <div>
                        <strong style="color: #333; display: block; margin-bottom: 5px;">${product.name}</strong>
                        <span style="color: #666; font-size: 14px;">ID: ${product.id}</span>
                    </div>
                </div>
            </td>
            <td style="padding: 15px 10px; text-align: center; color: #333;">
                ${product.quantity}
            </td>
            <td style="padding: 15px 10px; text-align: right; color: #333;">
                ₹${product.price}
            </td>
            <td style="padding: 15px 10px; text-align: right; font-weight: bold; color: #007cba;">
                ₹${product.price * product.quantity}
            </td>
        </tr>
    `).join('');

        const htmlMessage = `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; background: #fff;">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid #007cba;">
                <h1 style="color: #007cba; margin: 0; font-size: 28px;">BLND</h1>
                <h2 style="color: #333; margin: 10px 0 0 0; font-size: 22px;">New Order Received</h2>
            </div>

            <!-- Customer Information -->
            <div style="background: #f9f9f9; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
                <h3 style="color: #333; margin-top: 0; margin-bottom: 20px; font-size: 18px; border-bottom: 2px solid #007cba; padding-bottom: 8px;">Customer Information</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div>
                        <p style="margin: 8px 0;"><strong style="color: #555;">Name:</strong> ${firstName} ${lastName}</p>
                        <p style="margin: 8px 0;"><strong style="color: #555;">Email:</strong> 
                            <a href="mailto:${email}" style="color: #007cba; text-decoration: none;">${email}</a>
                        </p>
                        ${company ? `<p style="margin: 8px 0;"><strong style="color: #555;">Company:</strong> ${company}</p>` : ''}
                        ${phoneNumber ? `<p style="margin: 8px 0;"><strong style="color: #555;">Phone:</strong> 
                            <a href="tel:${phoneNumber}" style="color: #007cba; text-decoration: none;">${phoneNumber}</a>
                        </p>` : ''}
                    </div>
                    <div>
                        ${address ? `<p style="margin: 8px 0;"><strong style="color: #555;">Address:</strong> ${address}</p>` : ''}
                        ${apartment ? `<p style="margin: 8px 0;"><strong style="color: #555;">Apartment:</strong> ${apartment}</p>` : ''}
                        ${city ? `<p style="margin: 8px 0;"><strong style="color: #555;">City:</strong> ${city}</p>` : ''}
                        ${pinCode ? `<p style="margin: 8px 0;"><strong style="color: #555;">Pin Code:</strong> ${pinCode}</p>` : ''}
                    </div>
                </div>
            </div>

            <!-- Order Details -->
            <div style="background: #fff; border: 2px solid #f0f0f0; border-radius: 10px; overflow: hidden; margin-bottom: 25px;">
                <div style="background: #007cba; color: white; padding: 15px;">
                    <h3 style="margin: 0; font-size: 18px;">Order Details</h3>
                </div>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #f8f9fa;">
                            <th style="padding: 15px 10px; text-align: left; color: #555; font-weight: bold; border-bottom: 2px solid #dee2e6;">Product</th>
                            <th style="padding: 15px 10px; text-align: center; color: #555; font-weight: bold; border-bottom: 2px solid #dee2e6;">Qty</th>
                            <th style="padding: 15px 10px; text-align: right; color: #555; font-weight: bold; border-bottom: 2px solid #dee2e6;">Price</th>
                            <th style="padding: 15px 10px; text-align: right; color: #555; font-weight: bold; border-bottom: 2px solid #dee2e6;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${productsHTML}
                    </tbody>
                </table>
                
                <!-- Total Section -->
                <div style="background: #f8f9fa; padding: 20px; text-align: right; border-top: 2px solid #dee2e6;">
                    <div style="font-size: 20px; font-weight: bold; color: #007cba;">
                        Total Amount: ₹${calculatedTotal}
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 8px; color: #666;">
                <p style="margin: 0; font-size: 14px;">
                    <strong>Order received on:</strong> ${new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}
                </p>
                <p style="margin: 10px 0 0 0; font-size: 12px; color: #999;">
                    Please process this order at your earliest convenience.
                </p>
            </div>
        </div>
    `;


        const textMessage = `
BLND - New Order Received

Customer Information:
Name: ${firstName} ${lastName}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phoneNumber ? `Phone: ${phoneNumber}` : ''}

${address || apartment || city || pinCode ? `
Delivery Address:
${address ? `Address: ${address}` : ''}
${apartment ? `Apartment: ${apartment}` : ''}
${city ? `City: ${city}` : ''}
${pinCode ? `Pin Code: ${pinCode}` : ''}
` : ''}

Order Details:
${products.map(product =>
            `- ${product.name} (ID: ${product.id}) - Qty: ${product.quantity} - Price: ₹${product.price} - Total: ₹${product.price * product.quantity}`
        ).join('\n')}

Total Amount: ₹${calculatedTotal}

Order received on: ${new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}
    `;

        const transport = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.NEXT_PUBLIC_MY_EMAIL,
                pass: process.env.NEXT_PUBLIC_MY_PASS,
            },
        });

        const mailOptions: Mail.Options = {
            from: email,
            to: process.env.NEXT_PUBLIC_MY_EMAIL,
            replyTo: email,
            subject: `BLND New Order - ${firstName} ${lastName} - ₹${calculatedTotal}`,
            text: textMessage,
            html: htmlMessage
        };

        const info = await transport.sendMail(mailOptions);

        console.log("Order email sent successfully:", info.messageId);

        return NextResponse.json({
            success: true,
            message: "Order submitted successfully",
            messageId: info.messageId,
            orderDetails: {
                customer: `${firstName} ${lastName}`,
                email: email,
                totalAmount: calculatedTotal,
                itemCount: products.length
            }
        }, { status: 200 });

    } catch (error) {
        console.error("Order email sending failed:", error);

        return NextResponse.json({
            success: false,
            message: "Failed to send order email",
            error: "Error Processing Order"
        }, { status: 500 });
    }

}